import React from "react";

const Contact = () => {
  const contact = `
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Comaptible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <style>
      #contact{
        background-color: rgb(219, 219, 219);
      }
      #contact:hover{
        
        box-shadow: 0 0 10px rgb(0, 0, 0);
      }
      #btn5 button {
        background: white;
        border: 2px solid black;
        transition: 0.5s ease;
        cursor: pointer;
      }
      #btn5 button:hover {
        background-color: rgb(230, 15, 15);
        color: white;
        border: 0cap;
      }
      #input:hover{
        box-shadow: 0 0 5px black;
      }
    </style>
        
        <div class="container-fluid contact py-5">
          <div class="container py-5">
            <div class="p-5 rounded" id="contact">
              <div class="row g-4">
                <div class="col-12 mb-4">
                  <div class="text-center mx-auto" style="max-width: 700px">
                    <h1 class="text-black">Conact Us!</h1>
                  </div>
                </div>
                <div class="col-lg-7">
                  <form action="" class="">
                    <input
                      type="text"
                      class="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Your Name"
                      id="input"
                    />
                    <input
                      type="email"
                      class="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Enter Your Email"
                      id="input"
                    />
                    <textarea
                      class="w-100 form-control border-0 mb-4"
                      rows="5"
                      cols="10"
                      placeholder="Your Message"
                      id="input"
                    ></textarea>
                    <div 
                    id="btn5">
                    <button
                      class="w-100 form-control py-3"
                      type="submit"
                    >
                      Submit
                    </button></div>
                  </form>
                </div>
                <div class="col-lg-5">
                  <div class="d-flex p-4 rounded mb-4 bg-white">
                    <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Service Availability</h4>
                      <p class="mb-2">
                        24*7 Service Available at our Manor!
                      </p>
                    </div>
                  </div>
                  <div class="d-flex p-4 rounded mb-4 bg-white">
                    <i class="fas fa-envelope fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Mail Us</h4>
                      <p class="mb-2">21se02it019@ppsu.ac.in
                      <br>21se02it040@ppsu.ac.in</p>
                    </div>
                  </div>
                  <div class="d-flex p-4 rounded bg-white">
                    <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Telephone</h4>
                      <p class="mb-2">(+91) 9913180739
                      <br>(+91) 9724591837</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </body>
    </html>`;
  return <div dangerouslySetInnerHTML={{__html:contact}}></div>;
};

export default Contact;
