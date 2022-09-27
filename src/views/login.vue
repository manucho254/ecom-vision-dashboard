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
                },
                passWordInputType: "password",
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
            },
            passWordToggle (){
                if (this.passWordInputType === "password"){
                    this.passWordInputType = "text"
                }else{
                    this.passWordInputType = "password"
                }
            }
        },
        mounted () {
            console.log(this.passWordInputType)
        }
    }
</script>
<template>
    <div class="login">
        <div class="container">
            <nav class="login-navbar">
                <div class="logo">
                    <h4 class="site-logo">Razor</h4>
                    <hr>
                </div>
                <div class="d-flex gap-2 align-items-center">
                    <b-icon icon="globe"></b-icon>
                    <button class="btn">Sign up</button>
                    <button class="btn-orange btn"> Request Demo</button>
                </div>
            </nav>
            <div style="height:70vh;" class="d-flex justify-content-center 
                align-items-center">
                <div class="card p-5 card-border">
                    <div class="d-flex flex-column gap-3 mb-4">
                        <h3 class="header">Agent Login</h3>
                        <p class="header-text">Hey, enter your details to sign in to you account.</p>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="form-group mb-3">
                            <input 
                                class="form-control" 
                                type="email" 
                                placeholder="Email / Phone No" 
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
                                :type="passWordInputType" 
                                placeholder="Password" 
                                v-model="form_data.passWord.value"
                                @onkeyup="submit"    
                                required
                                :class="{'is-invalid': $v.form_data.passWord.value.$error }"
                            >
                            <span 
                                @click="passWordToggle"
                                type="button shadow-none"
                                class="password-show p-0">
                                <b-icon v-if="passWordInputType == 'password'" icon="eye-fill"></b-icon>
                                <b-icon v-else icon="eye"></b-icon>
                            </span>
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
                        <p class="text-start tex-sm">Having trouble in sign in?</p>
                        <div class="form-group">
                            <button class="mt-3 btn btn-orange w-100">Sign In</button>
                        </div>
                    </form>
                    <div class="d-flex justify-content-center
                            mt-5">
                        <div class="w-25"><hr></div>
                        <div class="bt-2">Or sign in with</div>
                        <hr class="w-25">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .login{
        background-color: rgb(240, 232, 221) !important;
        width: 100% !important;
        height: 739px !important;
    }
    .card {
        width: 450px;
    }
    .card-border {
        border-radius: 30px;
        border: none;
    }
    .btn-orange {
        background-color: rgb(241, 194, 132);
    }
    .login-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .site-logo {
        font-size: 30px !important;
        font-weight: bold;
    }
    .header {
        font-size: 30px !important;
        font-weight: bold;
    }
    .header-text {
        font-size: 20px !important;
    }
    .form-control {
        box-shadow: none;
    }
    .btn:hover{
        background-color: rgb(247, 230, 208);
    }
    .password-show {
        position: relative;
        top: -30px;
        left: 150px;
    }
    .password-show:hover {
        cursor: pointer;
    }
</style>