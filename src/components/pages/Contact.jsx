import React from 'react'

export default function Contact() {
  return (
    <div>

<div>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
       <input type="text" placeholder='name' />
      </div>
      <div>
        <input type="text" placeholder='email' />
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="button" value="send" />
      </div>
    </form>
  </div>
</div>

    </div>
  )
}
