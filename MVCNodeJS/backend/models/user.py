class User:
    def __init__(self, user_id, name, email, phone, address):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address

    def serialize(self):
        return {
            'user_id': self.user_id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'address': self.email
        }
