import "../../styles/pages.css";

export default function Refund() {
  return (
    <section className="about-page">

      <div className="about-container">
        <h1>Refund Policy</h1>

        {/* Cancellation & Returns */}
        <div className="about-block">
          <h2>Cancellation & Returns</h2>
          <p>
            We, at MyMul, are committed to providing the highest level of
            customer satisfaction. Due to our strict quality standards,
            products once opened cannot be repackaged or resold. Therefore, we
            do not accept returns on opened merchandise.
          </p>
          <p>
            In unusual circumstances, if a product is damaged during delivery,
            we offer a replacement. Any product damage must be reported to the
            respective marketing representative within 24 hours of delivery.
            The product must be self-shipped to our address for verification.
          </p>
          <p>
            Upon receipt of the product, quality checks will be performed and a
            replacement or refund claim will be issued as per the requirement.
            Refund claims will be adjusted in the invoice.
          </p>
          <p>
            Please note that exchanges or refunds are not offered on opened or
            used products. MyMul is not responsible for damages occurring after
            delivery.
          </p>
        </div>

        {/* Processing Time */}
        <div className="about-block">
          <h2>Processing Time</h2>
          <p>
            Please allow one to three working days from the date of return for
            your request to be processed. You will be contacted once the return
            process is complete.
          </p>
          <p>
            All claims for damages or missing items must be reported within 24
            hours of delivery. Requests made after 24 hours will not be
            processed.
          </p>
          <p>
            Concerns may be raised at:
            <br />
            <strong>Website:</strong>{" "}
            <a
              href="http://mymul.coop/complaints-and-suggestions"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://mymul.coop/complaints-and-suggestions
            </a>
          </p>
        </div>

        {/* Exclusions */}
        <div className="about-block">
          <h2>Exclusions</h2>
          <p>
            Damages caused due to negligence or incorrect application are not
            covered under the Returns Policy.
          </p>
          <p>
            No exchange or return will be processed in cases where there are no
            quality-related issues.
          </p>
          <p>
            Consumers are advised to ensure lactose tolerance before consuming
            the products.
          </p>
        </div>

        {/* Cancellation Policy */}
        <div className="about-block">
          <h2>Cancellation Policy</h2>
          <p>
            Orders placed through{" "}
            <strong>https://erp.mymul.org</strong> can be cancelled before
            dispatch. Once the order has been dispatched or delivered, it
            cannot be cancelled and no refunds will be issued.
          </p>
        </div>

        {/* Out of Stock */}
        <div className="about-block">
          <h2>Out of Stock Items</h2>
          <p>
            In case of out-of-stock items, customers may add products to their
            wishlist. Once the products are back in stock, an automated
            notification will be sent, allowing the order to be placed easily.
          </p>
        </div>

        {/* Payments */}
        <div className="about-block">
          <h2>Payments</h2>
          <p>MyMul offers the following payment options:</p>
          <ul className="values-list">
            <li>Credit Cards (Visa, MasterCard)</li>
            <li>Debit Cards (Visa Electron, Maestro)</li>
            <li>Net Banking (all major banks in India)</li>
            <li>Cash on Delivery</li>
            <li>UPI Payments</li>
            <li>Bank Transfer</li>
          </ul>
          <p>
            All online payments are processed through trusted payment gateways
            using encryption technology to ensure secure transactions. Payments
            made via card or net banking are safe and secure.
          </p>
        </div>
      </div>

    </section>
  );
}
