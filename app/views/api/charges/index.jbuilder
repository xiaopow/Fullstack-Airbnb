json.charges do
  json.array! @charges do |charge|
    json.checkout_session_id charge.checkout_session_id
    json.currency charge.currency
    json.amount charge.amount
  end
end
