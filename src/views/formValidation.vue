<script>
    import { required, minLength, maxLength, alpha, email, sameAs} from 'vuelidate/lib/validators';

    export default {
        name: "formVuelidate",
        data () {
            return {
                form_data: {
                    userName: "",
                    email: "",
                    passWord: {
                        value: "",
                        confirm: "",
                    },
                    gender: "",
                    acceptTerms: "",
                }
            }
        },
        validations: {
            form_data: {
                userName: {required, alpha},
                email: {required, email},
                passWord: {
                    value: {
                        required, 
                        maxLength: maxLength(12),
                        minLength: minLength(6)
                    },
                    confirm: {
                        required, 
                        maxLength: maxLength(12),
                        minLength: minLength(6),
                        sameAsPassword: sameAs('value')
                    }
                },
                gender: {required},
                acceptTerms: {required},
            }
        },
        methods: {
            submit (){
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    console.log("Invalid data")
                }
            }
        }
    }
</script>
<template>
    <div class="container">
        <div style="height: 100vh;" class="d-flex justify-content-center 
            align-items-center">
            <div class="card p-5 col-md-4">
                <form @submit.prevent="submit">
                    <div class="form-group mb-3">
                        <label>Username *</label>
                        <input 
                            class="form-control" 
                            type="text" 
                            @onkeyup="submit"
                            placeholder="Username"
                            v-model="form_data.userName"       
                            required
                            :class="{'is-invalid': $v.form_data.userName.$error }"
                        >
                        <div>
                            <span v-if="!$v.form_data.userName.required && $v.form_data.userName.$dirty">Username required!</span>
                            <span v-if="!$v.form_data.userName.alpha && $v.form_data.userName.$dirty">Username required!</span>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <input 
                            class="form-control" 
                            type="email" 
                            placeholder="Email" 
                            v-model="form_data.email"
                            @onkeyup="submit"    
                            required
                            :class="{'is-invalid': $v.form_data.email.$error }"
                        >
                        <div class="invalid-feedback">
                            <span 
                                v-if="(!$v.form_data.email.required || !$v.form_data.email.email) && $v.form_data.email.$dirty">
                                Valid email required!
                            </span>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <input 
                            class="form-control" 
                            type="password" 
                            placeholder="Password" 
                            v-model="form_data.passWord.value"
                            @onkeyup="submit"    
                            required
                            :class="{'is-invalid': $v.form_data.passWord.value.$error }"
                        >
                        <div class="invalid-feedback">
                            <span v-if="!$v.form_data.passWord.value.required && $v.form_data.passWord.value.$dirty">
                                Password required !
                            </span>
                            <span v-if="!$v.form_data.passWord.value.minLength && $v.form_data.passWord.value.$dirty">
                                Password must have more than 6 charaters!
                            </span>
                            <span v-if="!$v.form_data.passWord.value.maxLength && $v.form_data.passWord.value.$dirty">
                                Password can only have 12 charaters !
                            </span>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <input 
                            class="form-control"
                            type="password" 
                            placeholder="Confirm Password" 
                            v-model="form_data.passWord.confirm"
                            @onkeyup="submit"    
                            required
                            :class="{'is-invalid': $v.form_data.passWord.confirm.$error}"
                        >
                        <div class="invalid-feedback">
                            <span v-if="!$v.form_data.passWord.confirm.required && $v.form_data.passWord.confirm.$dirty">
                                Confirm Password required !
                            </span>
                            <span v-if="!$v.form_data.passWord.value.minLength && $v.form_data.passWord.confirm.$dirty">
                                Confirm Password must have more than 6 charaters!
                            </span>
                            <span v-if="!$v.form_data.passWord.confirm.maxLength && $v.form_data.passWord.confirm.$dirty">
                                Confirm Password can only have 12 charaters !
                            </span>
                            <span v-if="!$v.form_data.passWord.confirm.sameAsPassword 
                                    && $v.form_data.passWord.confirm.$dirty && $v.form_data.passWord.confirm.required">
                                Confirm password does not match password !
                            </span>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <input 
                            class="form-control" 
                            type="text" 
                            placeholder="Gender"
                            v-model="form_data.gender"
                            @onkeyup="submit"    
                            required
                            :class="{'is-invalid': $v.form_data.gender.$error}"
                        >
                        <div class="ivalid-feedback">
                            <span v-if="!$v.form_data.gender.required && $v.form_data.gender.$dirty">Gender required!</span>
                        </div>
                    </div>
                    <button class="mt-3 btn btn-success">submit</button>
                </form>
            </div>
        </div>
</div>
</template>