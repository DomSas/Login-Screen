import Image from "next/image";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";
import styles from "../styles/SignupPage.module.scss";

const Signup: React.FC = () => {
  return (
    <>
      <div className={styles["signup-page"]}>
        <div className={styles["signup-page__intro"]}>
          <Image
            src='/tensor-logo.png'
            width={161}
            height={39}
            alt='tensor-energy-logo'
          />
          <h1 className={styles["signup-page__primary-text"]}>
            Green energy doesn&apos;t
            <br /> have to be complicated!
          </h1>
          <h2 className={styles["signup-page__secondary-text"]}>
            Let Tensor Energy help you.
          </h2>
          <div className={styles["signup-page__image"]}>
            <Image
              src='/building-energy.gif'
              alt='building-energy'
              width={280}
              height={280}
            />
          </div>
        </div>
        <div className={styles["signup-page__form"]}>
          <SignupForm />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signup;
