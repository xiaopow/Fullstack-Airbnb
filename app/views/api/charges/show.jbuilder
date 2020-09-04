json.charge do
  json.checkout_session_id @charge.checkout_session_id
  json.currency @charge.currency
  json.amount @charge.amount

  json.booking do
    json.id @charge.booking.id
    json.start_date @charge.booking.start_date
    json.end_date @charge.booking.end_date
  end

end
