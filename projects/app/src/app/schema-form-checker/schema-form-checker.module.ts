import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SchemaFormCheckerComponent } from "./schema-form-checker.component";
import { SchemaFormComponent } from "./schema-form";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { AsyncPipe, JsonPipe, NgIf } from "@angular/common";
import { ClipboardModule } from "@angular/cdk/clipboard";

@NgModule({
  declarations: [SchemaFormCheckerComponent, SchemaFormComponent],
  exports: [SchemaFormCheckerComponent],
  imports: [
    AsyncPipe,
    FormsModule,
    ClipboardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    JsonPipe,
    ReactiveFormsModule,
    NgIf,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SchemaFormCheckerModule {}
