import { Component, EventEmitter, Input, Output } from "@angular/core";

import "@gravitee/ui-components/wc/gv-schema-form";

@Component({
  selector: "gio-schema-form",
  templateUrl: "./schema-form.component.html",
})
export class SchemaFormComponent {
  @Input()
  public schema: unknown;

  @Input()
  public value: unknown;

  @Output()
  private updatedValue = new EventEmitter<unknown>();

  onChange($event: any) {
    this.updatedValue.emit($event.detail.values);
  }
}
