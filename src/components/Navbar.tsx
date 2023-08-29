import { useShoppingCart } from "../context/ShoppingCarContex";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()

    return (
      <>
        <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
          <Container>
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>
                <span> Home </span>
              </Nav.Link>
              <Nav.Link to="/fruits" as={NavLink}>
                {" "}
                Fruits{" "}
              </Nav.Link>
              <Nav.Link to="/contact" as={NavLink}>
                {" "}
                Contact{" "}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/login" as={NavLink}>
                {" "}
                Login{" "}
              </Nav.Link>
              <Nav.Link to="/signup" as={NavLink}>
                {" "}
                Sign Up{" "}
              </Nav.Link>
            </Nav>
            <Button
              onClick={openCart}
              variant="outline-primary"
              className="rounded-circle"
              style={{ width: "3.7rem", height: "3rem", position: "relative", marginLeft: "10px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1200"
                style={{
                  width: "80px",
                  height: "80px",
                  position: "relative",
                }}
              >
                <path
                  d="M198.746,439.89c-5.698-3.854-12.636-6.128-20.013-6.119c-4.912,0-9.651,1-13.943,2.82
		c-6.434,2.721-11.876,7.244-15.737,12.958c-3.862,5.698-6.12,12.636-6.112,20.013c-0.008,4.912,0.993,9.651,2.812,13.934
		c2.729,6.443,7.244,11.884,12.95,15.737c5.706,3.871,12.653,6.128,20.03,6.128c4.912,0,9.642-1.001,13.926-2.82
		c6.442-2.721,11.892-7.253,15.746-12.959c3.854-5.698,6.119-12.644,6.119-20.021c0-4.911-1.009-9.642-2.82-13.934
		C208.983,449.185,204.452,443.743,198.746,439.89z M192.03,475.176c-1.092,2.58-2.936,4.805-5.244,6.36
		c-2.315,1.555-5.028,2.456-8.054,2.464c-2.026-0.008-3.904-0.405-5.615-1.142c-2.572-1.074-4.805-2.927-6.36-5.226
		c-1.555-2.324-2.448-5.044-2.464-8.072c0.009-2.018,0.414-3.887,1.142-5.615c1.075-2.572,2.928-4.796,5.234-6.359
		c2.316-1.554,5.037-2.448,8.063-2.456c2.018,0,3.887,0.406,5.607,1.133c2.58,1.083,4.796,2.927,6.36,5.243
		c1.555,2.315,2.456,5.028,2.456,8.054C193.155,471.587,192.758,473.456,192.03,475.176z"
                />
                <path
                  d="M168.726,392.844c-3.87,0-7.492-0.777-10.816-2.175c-4.962-2.1-9.246-5.64-12.239-10.089
		c-2.878-4.275-4.582-9.312-4.714-14.835c0.149-6.592,2.25-12.314,5.938-16.887c1.91-2.357,4.267-4.424,7.128-6.136
		c2.828-1.687,6.16-3.026,10.073-3.87l244.336-39.769c15.968-2.605,28.662-14.811,31.888-30.664l29.887-146.928v-0.016
		c0.347-1.704,0.512-3.44,0.512-5.16c0-5.938-2.034-11.743-5.855-16.424c-4.92-6.02-12.296-9.518-20.086-9.518H106.456
		L94.928,50.769v0.008c-5.293-17.705-19.815-31.119-37.876-34.989L15.688,6.931C8.692,5.426,1.794,9.891,0.29,16.896
		c-1.497,7.004,2.96,13.901,9.973,15.398l41.349,8.865c8.807,1.885,15.885,8.418,18.457,17.052l75.585,259.634
		c-1.703,0.794-3.349,1.654-4.928,2.605c-8.154,4.855-14.687,11.669-19.07,19.624c-4.192,7.559-6.417,16.126-6.624,24.967h-0.042
		v1.347h0.033c0.166,6.906,1.638,13.53,4.193,19.575c4.094,9.667,10.891,17.846,19.458,23.634c8.567,5.796,18.97,9.196,30.052,9.187
		h137.269c-0.042-1.281-0.19-2.53-0.19-3.82c0-7.567,0.777-14.952,2.175-22.122H168.726z M353.463,134.937
		c7.285-2.117,14.91,2.051,17.027,9.336l27.836,95.275c2.117,7.286-2.059,14.902-9.344,17.035
		c-7.278,2.126-14.902-2.05-17.027-9.336l-27.828-95.275C342,144.695,346.177,137.071,353.463,134.937z M293.4,135.185
		c7.278-2.134,14.902,2.042,17.027,9.328l30.49,104.412c2.134,7.278-2.051,14.911-9.328,17.036
		c-7.278,2.125-14.902-2.051-17.036-9.337l-30.49-104.413C281.938,144.936,286.114,137.302,293.4,135.185z M233.321,135.4
		c7.285-2.117,14.91,2.059,17.027,9.344l32.996,112.972c2.133,7.286-2.051,14.911-9.328,17.035
		c-7.277,2.126-14.902-2.05-17.036-9.336l-32.996-112.98C221.858,145.158,226.035,137.534,233.321,135.4z M173.25,135.64
		c7.286-2.126,14.911,2.051,17.036,9.337l35.568,121.796c2.134,7.285-2.051,14.918-9.328,17.036
		c-7.278,2.133-14.902-2.051-17.036-9.328l-35.576-121.812C161.796,145.39,165.964,137.766,173.25,135.64z"
                />
                <path
                  d="M421.604,324.561c-49.932,0-90.396,40.472-90.396,90.404c0,49.924,40.464,90.396,90.396,90.396
		c49.924,0,90.396-40.472,90.396-90.396C512,365.033,471.528,324.561,421.604,324.561z M416.478,457.19l-43.217-34.576l16.399-20.5
		l22.427,17.945l37.784-48.576l20.733,16.118L416.478,457.19z"
                />
              </svg>
              {cartQuantity > 0 && (
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1rem",
                    height: "1rem",
                    position: "absolute",
                    bottom: 5,
                    right: 9,
                    transform: "translate{30%, 30%}",
                  }}
                >
                  {cartQuantity}
                </div>
              )}
            </Button>
          </Container>
        </NavbarBs>
      </>
    );}