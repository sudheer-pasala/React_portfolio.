import "./Contact.css";

function ReachOut() {
  return (
    <div id="Contact">
      <div className="container mt-5 ReachOut">
        <h2>Contact Form</h2>
        <form>
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-group">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="message" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <hr></hr>
    </div>
  );
}

export default ReachOut;
