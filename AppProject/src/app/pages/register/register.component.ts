import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { User } from "./models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({ fullName: ["", Validators.required], email: ["", [Validators.required, Validators.email]] }); //ou // registerForm = this.formBuilder.group({ fullName: new FormControl(""), email: new FormControl("") });
  public user!: User;

  ngOnInit(): void {}

  onValidFullname() {
    let field = this.registerForm.get("fullName");
    return (field?.errors && field.dirty) || (field?.errors && field?.touched);
  }
  onValidEmail() {
    let field = this.registerForm.get("email");
    return (field?.errors && field.dirty) || (field?.errors && field?.touched);
  }

  sendFormRegister() {
    // console.log(this.registerForm.valid);
    // console.log(this.registerForm);
    // console.log(this.registerForm.value);

    this.user = Object.assign({}, this.user, this.registerForm.value);
    console.log(this.user);
    //

    var json = JSON.stringify(this.user);
    console.log("json", json);
  }
}
