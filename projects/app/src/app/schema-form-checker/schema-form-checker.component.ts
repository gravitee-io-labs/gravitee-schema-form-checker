import { Component, Input } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  startWith,
} from "rxjs";

interface Form {
  schema: FormControl<string | null>;
}

function validJson(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    try {
      JSON.parse(control.value);
      return null;
    } catch (e: unknown) {
      return { invalidJson: { value: control.value } };
    }
  };
}

@Component({
  selector: "gio-schema-form-checker",
  templateUrl: "./schema-form-checker.component.html",
  styleUrls: ["./schema-form-checker.component.scss"],
})
export class SchemaFormCheckerComponent {
  form = new FormGroup<Form>({
    schema: new FormControl(null, {
      validators: [Validators.required, validJson()],
    }),
  });

  jsonSchema$ = this.form.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(500),
    startWith(this.form.value),
    filter(() => this.form.valid),
    map(() => {
      console.log("==> ");
      if (this.form.value.schema) {
        this._schema = this.form.value.schema;
        return JSON.parse(this.form.value.schema);
      }
      return {};
    })
  );

  rawValue: unknown = {};
  value: string = JSON.stringify(this.rawValue);

  constructor() {}

  public updateValue(value: unknown) {
    this.rawValue = value;
    this.value = JSON.stringify(value);
  }

  private _schema = "{}";
  @Input()
  public set schema(value: string) {
    this._schema = value;
    this.form.controls.schema.reset(value);
  }
  public get schema(): string {
    return this._schema;
  }
}
