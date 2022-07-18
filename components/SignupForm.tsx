import styles from "../styles/SignupForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/router";

type FormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const SignupForm: React.FC = () => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {console.log(data);
router.push('/Dashboard')};

  return (
    <>
      <div className={styles["signup-form"]}>
        <h1 className={styles["signup-form__title"]}>Sign Up Today</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["signup-form__form-group"]}>
            <label>Email</label>
            <input type='text' {...register("email")} />
            <div className={styles["signup-form__error"]}>
              {errors.email?.message}
            </div>
          </div>

          <div className={styles["signup-form__form-group"]}>
            <label>Password</label>
            <input type='password' {...register("password")} />
            <div className={styles["signup-form__error"]}>
              {errors.password?.message}
            </div>
          </div>

          <div className={styles["signup-form__form-group"]}>
            <label>Confirm Password</label>
            <input type='password' {...register("confirmPassword")} />
            <div className={styles["signup-form__error"]}>
              {errors.confirmPassword?.message}
            </div>
          </div>

          <div className={styles["signup-form__form-check"]}>
            <input type='checkbox' id='terms' {...register("acceptTerms")} />
            <label htmlFor='acceptTerms'>
              I accept our{" "}
              <u className={styles["signup-form__link"]}>Term of Service</u> and{" "}
              <u className={styles["signup-form__link"]}>Privacy Policy</u>.
            </label>
            <div className={styles["signup-form__error"]}>
              {errors.acceptTerms?.message}
            </div>
          </div>
          <div className={styles["signup-form__submit-buttons"]}>
            <input
              type='submit'
              value='Sign Up'
              onClick={() => console.log(errors)}
            />
            <p>Or</p>
            <button>
              <div className={styles["signup-form__google-image"]}>
                <Image
                  src='/google-icon.png'
                  alt='google-icon'
                  width={19}
                  height={19}
                />
              </div>
              Sign Up with Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
