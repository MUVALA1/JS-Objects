function Contact(first_name,Second_name,phone_number,email,adress){
	this.first_name=first_name;
	this.Second_name=Second_name;
	this.phone_number=phone_number;
	this.email=email;
	this.adress=adress	
};

var adress={
	street:"William street",
	city:"Kampala",
	country:"Uganda",
};

Contact.prototype.getName=function(){return this.first_name+"," +this.Second_name};//Creating a function to get the first anme and second name