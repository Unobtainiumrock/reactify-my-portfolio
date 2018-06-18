
const renderContact = () => {
  $('#app').html(`
<div id="contact" class="container-fluid bg-grey">
  <h2 class="text-center">CONTACT</h2>
  <div class="row">
    <div class="col-md-12 animated slideInLeft">
      <div class="row">
        <div class="col-md-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
        </div>
        <div class="col-md-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>
      <div class="row">
        <div class="col-md-12 form-group">
          <button class="btn btn-default pull-right nav-button" id="contact-button" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `)
}
