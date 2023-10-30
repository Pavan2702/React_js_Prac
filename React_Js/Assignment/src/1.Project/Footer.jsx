
import { Aperture, Facebook, Instagram, Twitter } from 'lucide-react'
import reactLogo from '../1.image/logo-icon (1).png'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row text-light">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">
                <img src={reactLogo}  alt="" className='image-1' />
                  Superprops</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled d-flex gap-3 align-items-center justify-content-center">
                  <li><a className="text-dark" href=""><Instagram className="bg-danger" /></a></li>
                  <li><a className="text-dark" href=""><Facebook className="bg-danger" /></a></li>
                  <li><a className="text-dark" href=""><Twitter className="bg-danger" /></a></li>
                  <li><a className="text-dark" href=""><Aperture className="bg-danger" /></a></li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Address</h5>
                <ul className="list-unstyled">
                  <li><a className="text-light" href="">XYZ</a></li>
                  <li><a className="text-light" href="">87654323456</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3 text-light">© 2020 Copyright:
            <a className="text-light" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>

        </footer>

      </>
    )
  }
}
