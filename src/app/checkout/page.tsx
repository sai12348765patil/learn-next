import Header from '../../components/Header';

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div style={{ padding: '2rem' }}>
        <h2>Checkout</h2>
        <form>
          <input type="text" placeholder="Full Name" required /><br /><br />
          <input type="text" placeholder="Address" required /><br /><br />
          <button type="submit">Place Order</button>
        </form>
      </div>
    </>
  );
}
