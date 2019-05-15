const phonePattern = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$');

$(document).ready(function() {
  $('.action-buttons .edit-button').click(event => {
    const clickedCard = $(event.target).parents()[3];

    const currentName = $(clickedCard)
      .find('.card-title.name')
      .text()
      .trim();
    const currentPosition = $(clickedCard)
      .find('.job-description')
      .text()
      .trim();
    const currentLocation = $(clickedCard)
      .find('.location-data .location')
      .text()
      .trim();
    const currentCompany = $(clickedCard)
      .find('.company-name')
      .text()
      .trim();
    const currentCompanyAddress = $(clickedCard)
      .find('.company-address')
      .text()
      .trim();
    const currentCompanyAddress2 = $(clickedCard)
      .find('.company-address2')
      .text()
      .trim();
    const currentPhone = $(clickedCard)
      .find('.phone-number')
      .text()
      .trim();

    $('#editContactModal #nameInput')[0].value = currentName;
    $('#editContactModal #positionInput')[0].value = currentPosition;
    $('#editContactModal #locationInput')[0].value = currentLocation;
    $('#editContactModal #companyInput')[0].value = currentCompany;
    $('#editContactModal #phoneInput')[0].value = currentPhone;
    $(
      '#editContactModal #companyAddressInput'
    )[0].value = currentCompanyAddress;
    $(
      '#editContactModal #companyAddress2Input'
    )[0].value = currentCompanyAddress2;

    $('.edit-contact-modal .submit-button').click(event => {
      const phoneInput = $('#editContactModal #phoneInput')[0].value;

      if (!phonePattern.test(phoneInput)) {
        alert('You have submitted an invalid phone number');
        return;
      }

      $(clickedCard)
        .find('.card-title.name')
        .text($('#editContactModal #nameInput')[0].value);

      $(clickedCard)
        .find('.job-description')
        .text($('#editContactModal #positionInput')[0].value);
      $(clickedCard)
        .find('.location-data .location')
        .text($('#editContactModal #locationInput')[0].value);
      $(clickedCard)
        .find('.company-name')
        .text($('#editContactModal #companyInput')[0].value);
      $(clickedCard)
        .find('.company-address')
        .text($('#editContactModal #companyAddressInput')[0].value);
      $(clickedCard)
        .find('.company-address2')
        .text($('#editContactModal #companyAddress2Input')[0].value);
      $(clickedCard)
        .find('.phone-number')
        .text($('#editContactModal #phoneInput')[0].value);
      $('#editContactModal').modal('hide');
    });
  });

  $('.action-buttons .delete-button').click(event => {
    $($(event.target).parents()[3]).remove();
  });

  $('.add-contact-modal .submit-button').click(event => {
    const nameInput = $('#addContactModal #nameInput')[0].value;
    const positionInput = $('#addContactModal #positionInput')[0].value;
    const locationInput = $('#addContactModal #locationInput')[0].value;
    const companyInput = $('#addContactModal #companyInput')[0].value;
    const companyAddressInput = $('#addContactModal #companyAddressInput')[0]
      .value;
    const companyAddress2Input = $('#addContactModal #companyAddress2Input')[0]
      .value;
    const phoneInput = $('#addContactModal #phoneInput')[0].value;
    if (!phonePattern.test(phoneInput)) {
      alert('You have submitted an invalid phone number');
      return;
    }

    const cardHtml = `
        <div class="col-12 col-lg-4 mb-3">
          <div class="card">
            <div class="card-body d-flex">
              <div
                class="card-picture mr-4 d-flex flex-column justify-content-center"
              >
                <img src="assets/john-smith.jpg" class="rounded-circle" />
                <h6 class="job-description text-center">
                ${positionInput}
                </h6>
              </div>
              <div class="card-information">
                <h4 class="card-title name">${nameInput}</h4>
                <div class="location-data d-flex align-items-center mb-3">
                  <div class="location-icon icon"></div>
                  <div class="location">${locationInput}</div>
                </div>
                <div class="company-data">
                  <div class="company-name font-weight-bold">
                  ${companyInput}
                  </div>
                  <div class="company-location">
                    <div class="company-address">${companyAddressInput}</div>
                    <div class="company-address2">${companyAddress2Input}</div>
                    <div class="phone">
                      <span>P:</span><span class="phone-number">${phoneInput}<span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="action-buttons p-1">
                <button class="edit-button btn btn-link pr-0">
                  <div class="pencil-icon icon"></div>
                </button>
                <button class="delete-button btn btn-link pl-0">
                  <div class="trash-icon icon"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
`;

    $($('.row')[$('.row').length - 1]).append(cardHtml);

    // resets the form after submit
    $('#addContactModal #nameInput')[0].value = null;
    $('#addContactModal #positionInput')[0].value = null;
    $('#addContactModal #locationInput')[0].value = null;
    $('#addContactModal #companyInput')[0].value = null;
    $('#addContactModal #companyAddressInput')[0].value = null;
    $('#addContactModal #companyAddress2Input')[0].value = null;
    $('#addContactModal #phoneInput')[0].value = null;

    $('#addContactModal').modal('hide');
  });

  //   You have exceeded your daily request quota for this billing account: http://g.co/dev/maps-no-account - API error prevents me from working on this at the moment
  //   $.get(
  //     ' https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8',
  //     data => {
  //       console.log(data);
  //     }
  //   );
});
