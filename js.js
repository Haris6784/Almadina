// Retrieve saved contacts from LocalStorage
let contactData = JSON.parse(localStorage.getItem('contactData')) || [];
let currentCategory = null;  // Track current category

// Helper function to check for duplicate contacts
function isContactExists(phone) {
    return contactData.some(contact => contact.phone === phone);
}

// Predefined contacts to be added under "Executive Contacts"
// Predefined contacts to be added under "Executive Contacts"
const newExecutiveContacts = [
    { name: "Shabhir Qadri", phone: "+92312-9832611", category: "Executive Contacts", subcategory: "None" },
    { name: "Muneer Nake ", phone: "+92300-0000002", category: "Executive Contacts", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Shop Keepers Contacts"
  const newShopKeepersContacts = [
    { name: "Shop Keeper 1", phone: "+92300-1111111", category: "Shop Keepers Contacts", subcategory: "None" },
    { name: "Shop Keeper 2", phone: "+92300-1111112", category: "Shop Keepers Contacts", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Suppliers Contacts"
  const newSuppliersContacts = [
    { name: "Supplier Name 1", phone: "+92300-2222221", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Supplier Name 2", phone: "+92300-2222222", category: "Suppliers Contacts", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Brokers Numbers"
  const newBrokersContacts = [
    { name: "Ramzan Shaloli Jazz", phone: "+92301-7150540", category: "Brokers Numbers", subcategory: "None" },
    { name: "Ramzan Shaloli Telenor", phone: "+92346-7779039", category: "Brokers Numbers", subcategory: "None" },
    { name: "Rana Habib Mithu", phone: "+92300-2667626", category: "Brokers Numbers", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Dera Shop Keepers Contact"
  const newDeraShopKeepersContacts = [
    { name: "Dera Shop Keeper 1", phone: "+92300-4444441", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Dera Shop Keeper 2", phone: "+92300-4444442", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" }
  ];
  
  // Predefined contacts to be added under "Local Contacts"
  const newLocalContacts = [
    { name: "Almadina Poultry New Colony", phone: "+92318-6837134", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi jarnaili Road", phone: "+92316-1490086", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Malik Fiaz Poultry new colony", phone: "+92333-6836279", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Muhammad Ajmal urf Mana Chishti", phone: "+92304-6880336", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Akhtar CHP", phone: "+92331-7608676", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sohail Sialvi kacha paka", phone: "+92302-4934474", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Fazli Almasoom ada", phone: "+92310-6525386", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Zafar Almasoom ada", phone: "+92300-4755899", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Foji Ali / Kawal Kalyar Chok", phone: "+92307-7140250", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Aziz ur rehman Dhaba Chok", phone: "+92314-6868366", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Raja Mushtaq Sadeeqi bazar", phone: "+92307-8899966", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Imran Qasai rail bazar", phone: "+92334-6138230", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ikram urf akna watto chok", phone: "+92333-6822737", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Iltaf Temoor watto chok", phone: "+92307-6755663", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Qasim C2 colony", phone: "+92301-6358503", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Afzal Habib Mat", phone: "+92340-3754618", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Amir 4 No chungi ", phone: "+92302-1061941", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Saif ullah wapda", phone: "+92305-7372689", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Bismillah C2 colony", phone: "+92310-7676853", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sajid CNG", phone: "+92305-2134763", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Irfan Quraishi chok", phone: "+92303-7683395", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Abdurrehman 4 no chungi", phone: "+92330-6763446", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Altaf karkhana", phone: "+92318-7909055", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kaku Qasai almasoom", phone: "+92307-1486686", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kamran Radhani Pump", phone: "+92304-4146383", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sultan almadina shop", phone: "+92316-7460238", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Hasnain Wapda colony", phone: "+92306-6042939", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mushtaq radhabi pump", phone: "+92311-7073024", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sufi Waqqas khaglan wala mor", phone: "+92315-4973534", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Imran Kalyar Chok", phone: "+92326-1801520", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Haji Tusawar mainbazar fajro chok", phone: "+92318-6093626", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Hafiz shahzad almasoom ada", phone: "+92321-6901558", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mumtaz C3 colony", phone: "+92333-6835301", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Shamsi kacha paka mor", phone: "+92313-5631349", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Yaseen rehmat ullah kacha paka mor", phone: "+92304-882143 1", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Aziz 4 no chungi", phone: "+92312-4853040", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Noor qari shafi madrssa", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Tahir Bhanja Kundal", phone: "+92311-7358948", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sohail Tufail kundal", phone: "+92313-7772125", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Waheed Fakhri Kalyar chok", phone: "+92300-3341886", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ikram 4 no chungi", phone: "+92308-0296183", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mazhar Dhaba chok", phone: "+92302-5412370", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Faizi Arain Hotel", phone: "+92307-4726271", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Asmatullah Wapda ", phone: "+92302-3957116", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Javeed ada", phone: "+92333-6836041", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Umar hayat / Khalid usmani", phone: "+92311-0704848", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Zakwan c2 colony ", phone: "+92304-1955115", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Gull meet / Shani /foji Mumtaz c2 colony ", phone: "+92318-4780488", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Fazal Tufail CNG", phone: "+92318-7909055", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Muhammad Haneef / Arif Chashlam Colony", phone: "+92334-7585488", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Irfan Watto chok", phone: "+92301-4966387", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Gulzar Sadedqi Bazar", phone: "+92302-2413146", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kamran kami", phone: "+92303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" }
  ];
  
  // Predefined contacts to be added under "Chakok Contacts"
  const newChakokContacts = [
    { name: "Hafiz Nazeer", phone: "+92343-6893868", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Maqsood", phone: "+92302-7979519", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Abid Tanveer", phone: "+92306-5392520", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Ghoos Junaid Puli", phone: "+92343-4189959", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Younas Khanqa", phone: "+92345-5820378", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz 5 Chak", phone: "+92347-7847199", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Amjad 5 Chak", phone: "+92333-9829784", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Arif Faryad 5 Chak", phone: "+92307-4857120", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz Mairaji", phone: "+92344-6876157", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Sadiq 4 Chak", phone: "+92300-4803745", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Mushtaq Goly Wala", phone: "+92301-6302330", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Hameed Sultany Wala", phone: "+92307-7013270", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Anwar Sultany Wala", phone: "+92304-4101339", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Atta Rasool", phone: "+92306-2539623", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" }
  ];
  
  // Predefined contacts to be added under "Employee Contacts"
  const newEmployeeContacts = [
    { name: "Asim Shah/Tasleem Shah", phone: "+92300-7870705", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Ajmal", phone: "+92318-6837134", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Ateeq", phone: "+92340-7488060", category: "Employee Contacts", subcategory: "None" },
    { name: "Waqas Ahmed Dhoon", phone: "+92306-9052240", category: "Employee Contacts", subcategory: "None" },
    { name: "Waqas Ahmed Jora", phone: "+92301-6067646", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Fawad Azam", phone: "+92304-8523826", category: "Employee Contacts", subcategory: "None" },
    { name: "Faraz Sadeeqi", phone: "+92312-5829431", category: "Employee Contacts", subcategory: "None" },
    { name: "Syed Najaf Ali Shah", phone: "+92342-9329803", category: "Employee Contacts", subcategory: "None" },
    { name: "Asim Khan", phone: "+92305-2443790", category: "Employee Contacts", subcategory: "None" },
    { name: "Nemat Ullah", phone: "+92332-5062164", category: "Employee Contacts", subcategory: "None" },
    { name: "Maqsood ul Hassan", phone: "+92319-6538656", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Bilal", phone: "+92316-7460238", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Irfan", phone: "+92310-7878370", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Haris", phone: "+92309-0295583", category: "Employee Contacts", subcategory: "None" },
    { name: "Ahtesham", phone: "+92320-0956752", category: "Employee Contacts", subcategory: "None" }
  ];
  
  // Predefined contacts to be added under "Drivers Contacts"
  const newDriversContacts = [
      { name: "Driver Name 1", phone: "+92300-6666661", category: "Drivers Contacts", subcategory: "None" },
      { name: "Driver Name 2", phone: "+92300-6666662", category: "Drivers Contacts", subcategory: "None" }
  ];
// Add predefined contacts ensuring no duplicates
Object.values(predefinedContacts).forEach(addUniqueContacts);

// Save the updated contact list to LocalStorage
localStorage.setItem('contactData', JSON.stringify(contactData));

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const subcategory = category === "Shop Keepers Contacts" ? document.getElementById("subcategory").value : "None";

    if (!isContactExists(phone)) {
        saveContact(name, phone, category, subcategory);
    } else {
        alert("This contact already exists.");
    }

    // Clear form fields
    document.getElementById("contact-form").reset();
    document.getElementById("subcategory").disabled = true; // Reset subcategory disable
});

// Show subcategories only for Shop Keepers Contacts
document.getElementById("category").addEventListener("change", function () {
    const subcategoryElement = document.getElementById("subcategory");
    subcategoryElement.disabled = this.value !== "Shop Keepers Contacts";
});

// Function to save the contact to LocalStorage
function saveContact(name, phone, category, subcategory) {
    contactData.push({ name, phone, category, subcategory });
    localStorage.setItem('contactData', JSON.stringify(contactData));
    alert(`Contact saved: ${name}, ${phone}, ${category}, ${subcategory}`);
}

// Function to view contacts by category or subcategory
function viewContacts(categoryOrSubcategory) {
    currentCategory = categoryOrSubcategory;
    document.getElementById("search-section").style.display = "block";
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    const filteredContacts = contactData.filter(contact => 
        contact.category === categoryOrSubcategory || contact.subcategory === categoryOrSubcategory
    );

    if (!filteredContacts.length) {
        contactList.innerHTML = `<div class="alert alert-warning">No contacts found for ${categoryOrSubcategory}</div>`;
        return;
    }

    filteredContacts.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.className = "d-flex justify-content-between align-items-center bg-light p-2 mb-2 border rounded";
        contactItem.innerHTML = `
            <span>${contact.name} - ${contact.phone}</span>
            <div>
                <a href="tel:${contact.phone}" class="btn btn-primary me-2">Call</a>
                <a href="https://wa.me/${contact.phone.replace(/^0+/, '').replace(/[^0-9]/g, '')}" class="btn btn-success me-2">WhatsApp</a>
                <button class="btn btn-warning me-2" onclick="editContact(${index})">Edit</button>
                <button class="btn btn-danger delete-btn" onclick="deleteContact(${index})">Delete</button>
            </div>
        `;
        contactList.appendChild(contactItem);
    });

    const downloadButton = document.createElement("button");
    downloadButton.className = "btn btn-secondary mt-3";
    downloadButton.textContent = "Download Contacts";
    downloadButton.onclick = () => downloadContacts(categoryOrSubcategory, filteredContacts);
    contactList.appendChild(downloadButton);
}

// Function to search contacts within a category
function searchCategoryContacts() {
    const searchQuery = document.getElementById("category-search-input").value.toLowerCase();
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    const filteredContacts = contactData.filter(contact => 
        (contact.category === currentCategory || contact.subcategory === currentCategory) &&
        (contact.name.toLowerCase().includes(searchQuery) || contact.phone.includes(searchQuery))
    );

    if (!filteredContacts.length) {
        contactList.innerHTML = `<div class="alert alert-warning">No contacts found.</div>`;
        return;
    }

    filteredContacts.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.className = "d-flex justify-content-between align-items-center bg-light p-2 mb-2 border rounded";
        contactItem.innerHTML = `
            <span>${contact.name} - ${contact.phone}</span>
            <div>
                <a href="tel:${contact.phone}" class="btn btn-primary me-2">Call</a>
                <a href="https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}" class="btn btn-success me-2">WhatsApp</a>
                <button class="btn btn-warning me-2" onclick="editContact(${index})">Edit</button>
                <button class="btn btn-danger delete-btn" onclick="deleteContact(${index})">Delete</button>
            </div>
        `;
        contactList.appendChild(contactItem);
    });
}

// Function to edit a contact
function editContact(index) {
    const contact = contactData[index];
    document.getElementById("name").value = contact.name;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("category").value = contact.category;

    if (contact.category === "Shop Keepers Contacts") {
        document.getElementById("subcategory").value = contact.subcategory;
        document.getElementById("subcategory").disabled = false;
    } else {
        document.getElementById("subcategory").disabled = true;
    }

    // Remove the contact from the list to allow updating
    contactData.splice(index, 1);
    localStorage.setItem('contactData', JSON.stringify(contactData));
}

// Function to delete a contact
function deleteContact(index) {
    if (confirm("Are you sure you want to delete this contact?")) {
        const filteredContacts = contactData.filter(contact => 
            contact.category === currentCategory || contact.subcategory === currentCategory
        );
        contactData = contactData.filter(contact => 
            !(contact.category === currentCategory && contact.phone === filteredContacts[index].phone) &&
            !(contact.subcategory === currentCategory && contact.phone === filteredContacts[index].phone)
        );
        localStorage.setItem('contactData', JSON.stringify(contactData));
        alert("Contact deleted.");
        
        // Remove the contact item from the DOM
        const contactList = document.getElementById("contact-list");
        contactList.removeChild(contactList.children[index]);
        
        // Update the contact list
        if (contactList.children.length === 0) {
            contactList.innerHTML = `<div class="alert alert-warning">No contacts found for ${currentCategory}</div>`;
        }
    }
}

// Function to download contacts as CSV
function downloadContacts(categoryOrSubcategory, list) {
    let csvContent = "data:text/csv;charset=utf-8,Name,Phone\n";
    list.forEach(contact => {
        csvContent += `${contact.name},${contact.phone}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${categoryOrSubcategory}-contacts.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
