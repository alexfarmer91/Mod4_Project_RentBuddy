# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Landlord.destroy_all
Building.destroy_all
Tenant.destroy_all
Payment.destroy_all

#create landlords
bob = Landlord.create({name: "Bob", username: "bob1", email: "robert@geniusmanagement.com", password: "password", company: "Genius Management LLC", bank_account: "096752", logo: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/brain_1f9e0.png"})
phil = Landlord.create({name: "Phil", username: "phil1975", email: "phil_1975@gmail.com", password: "password", bank_account: "345789"})
melissa = Landlord.create({name: "Melissa", username: "melissa_hoang", email: "melissa_hoang@gmail.com", password: "password", bank_account: "123456"})

#create buildings
southington = melissa.buildings.create({address: "7 Roxbury Ln, Southington, CT", units: 1})
bridgeport = melissa.buildings.create({address: "123 Main St, Bridgeport, CT", units: 4})

arlington = bob.buildings.create({address: "427 West St, Arlington, VA", units: 6})
manassas = bob.buildings.create({address: "12 Lark Rd, Manassas, VA", units: 2})

tampa = phil.buildings.create({address: "320 Sunset Ln, Tampa, FL", units: 10})
wpb = phil.buildings.create({address: "810 Rockridge Rd, West Palm Beach, FL", units: 4})

#create tenants
bill = southington.tenants.create({username: "bill2020", bank_account: "0934285", password: "123", name: "Bill", email: "billy@gmail.com", monthly_rent: 1500})
greg = bridgeport.tenants.create({username: "greggypoo", bank_account: "9845621", password: "123", name: "Greg", email: "greg@gmail.com", monthly_rent: 1100, unit: "1A"})
jane = bridgeport.tenants.create({username: "jane_the_virgin", bank_account: "5634958", password: "123", name: "Jane", email: "jane@gmail.com", monthly_rent: 1100, unit: "1B"})
eric = bridgeport.tenants.create({username: "not_eric_kim", bank_account: "4634158", password: "123", name: "Eric", email: "eric@gmail.com", monthly_rent: 1200, unit: "2B"})

james = arlington.tenants.create({username: "jimmyjohns", bank_account: "777777", password: "123", name: "James", email: "jimmy@gmail.com", monthly_rent: 1500, unit: "1A"})
gaida = arlington.tenants.create({username: "gaida1", bank_account: "666666", password: "123", name: "Gaida", email: "gaida@gmail.com", monthly_rent: 1500, unit: "2A"})

noam = manassas.tenants.create({username: "noam", bank_account: "333333", password: "123", name: "Noam", email: "noam@gmail.com", monthly_rent: 1000, unit: "A"})

bart = tampa.tenants.create({username: "bartsimpson", bank_account: "1111111", password: "123", name: "Bart", email: "bart_s@gmail.com", monthly_rent: 1000, unit: "101"})

turtle = wpb.tenants.create({username: "literally_a_turtle", bank_account: "1187341", password: "123", name: "Mr. Turtle", email: "shellshocker@gmail.com", monthly_rent: 1000, unit: "1A"})
bear = wpb.tenants.create({username: "bearboy", bank_account: "2187341", password: "123", name: "Big Bear", email: "rawrxd@gmail.com", monthly_rent: 1000, unit: "1B"})

[bill, greg, jane, eric, james, gaida, noam, bart, turtle, bear].each{ |tenant|
 tenant.payments.create({amount: tenant.monthly_rent})
}

