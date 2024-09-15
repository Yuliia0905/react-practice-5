import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
const regex = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/;

export const ExchangeForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const request = e.target.request.value;
    const isValidRequest = regex.test(request);
    if (!isValidRequest) return;
    // 15 USD in UAH
    // const trueFormat = {
    //   to: 'UAH',
    //   from: 'USD',
    //   amount: 15,
    // };
    const [amount, from, , to] = request.split(' ');
    const trueFormat = {
      to,
      from,
      amount,
    };
    console.log(trueFormat);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        name="request"
      />
    </form>
  );
};
