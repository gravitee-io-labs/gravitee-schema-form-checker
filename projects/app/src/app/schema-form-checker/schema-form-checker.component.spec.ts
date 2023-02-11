import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SchemaFormCheckerComponent } from "./schema-form-checker.component";
import { SchemaFormCheckerModule } from "./schema-form-checker.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("SchemaFormCheckerComponent", () => {
  let component: SchemaFormCheckerComponent;
  let fixture: ComponentFixture<SchemaFormCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SchemaFormCheckerModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SchemaFormCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
