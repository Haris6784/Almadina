// Retrieve saved contacts from LocalStorage
let contactData = JSON.parse(localStorage.getItem('contactData')) || [];
let currentCategory = null;  // Track current category

// Helper function to check if a contact with the same phone number already exists
function isContactExists(phone) {
    return contactData.some(contact => contact.phone === phone);
}

// Function to add unique contacts
function addUniqueContacts(contacts) {
    contacts.forEach(contact => {
        if (!isContactExists(contact.phone)) {
            contactData.push(contact);  // Add the contact only if it doesn't exist
        }
    });
}

// Predefined contacts to be added under "Executive Contacts"
const newExecutiveContacts = [
    { name: "Shabhir Qadri", phone: "0312-9832611", category: "Executive Contacts", subcategory: "None" },
    { name: "Muneer Nake ", phone: "0300-0000002", category: "Executive Contacts", subcategory: "None" }
];

// Predefined contacts to be added under "Shop Keepers Contacts"
const newShopKeepersContacts = [
    { name: "Shop Keeper 1", phone: "0300-1111111", category: "Shop Keepers Contacts", subcategory: "None" },
    { name: "Shop Keeper 2", phone: "0300-1111112", category: "Shop Keepers Contacts", subcategory: "None" }
];

// Predefined contacts to be added under "Suppliers Contacts"
const newSuppliersContacts = [
    { name: "Supplier Name 1", phone: "0300-2222221", category: "Suppliers Contacts", subcategory: "None" },
    { name: "Supplier Name 2", phone: "0300-2222222", category: "Suppliers Contacts", subcategory: "None" }
];

// Predefined contacts to be added under "Brokers Numbers"
const newBrokersContacts = [
    { name: "Ramzan Shaloli Jazz", phone: "0301-7150540", category: "Brokers Numbers", subcategory: "None" },
    { name: "Ramzan Shaloli Telenor", phone: "0346-7779039", category: "Brokers Numbers", subcategory: "None" },
    { name: "Rana Habib Mithu", phone: "0300-2667626", category: "Brokers Numbers", subcategory: "None" }
];

// Predefined contacts to be added under "Dera Shop Keepers Contact"
const newDeraShopKeepersContacts = [
    { name: "Dera Shop Keeper 1", phone: "0300-4444441", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Dera Shop Keeper 2", phone: "0300-4444442", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" }
];

// Predefined contacts to be added under "Local Contacts"
const newLocalContacts = [
    { name: "Almadina Poultry New Colony", phone: "0318-6837134", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi jarnaili Road", phone: "0316-1490086", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Malik Fiaz Poultry new colony", phone: "0333-6836279", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Muhammad Ajmal urf Mana Chishti", phone: "0304-6880336", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Akhtar CHP", phone: "0331-7608676", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sohail Sialvi kacha paka", phone: "0302-4934474", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Fazli Almasoom ada", phone: "0310-6525386", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Zafar Almasoom ada", phone: "0300-4755899", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Foji Ali / Kawal Kalyar Chok", phone: "0307-7140250", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Aziz ur rehman Dhaba Chok", phone: "0314-6868366", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Raja Mushtaq Sadeeqi bazar", phone: "0307-8899966", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Imran Qasai rail bazar", phone: "0334-6138230", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ikram urf akna watto chok", phone: "0333-6822737", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Iltaf Temoor watto chok", phone: "0307-6755663", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Qasim C2 colony", phone: "0301-6358503", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Afzal Habib Mat", phone: "0340-3754618", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Amir 4 No chungi ", phone: "0302-1061941", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Saif ullah wapda", phone: "0305-7372689", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Bismillah C2 colony", phone: "0310-7676853", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sajid CNG", phone: "0305-2134763", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Irfan Quraishi chok", phone: "0303-7683395", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Abdurrehman 4 no chungi", phone: "0330-6763446", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Altaf karkhana", phone: "0318-7909055", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kaku Qasai almasoom", phone: "0307-1486686", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kamran Radhani Pump", phone: "0304-4146383", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sultan almadina shop", phone: "0316-7460238", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Hasnain Wapda colony", phone: "0306-6042939", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mushtaq radhabi pump", phone: "0311-7073024", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sufi Waqqas khaglan wala mor", phone: "0315-4973534", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Imran Kalyar Chok", phone: "0326-1801520", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Haji Tusawar mainbazar fajro chok", phone: "0318-6093626", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Hafiz shahzad almasoom ada", phone: "0321-6901558", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mumtaz C3 colony", phone: "0333-6835301", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Shamsi kacha paka mor", phone: "0313-5631349", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Yaseen rehmat ullah kacha paka mor", phone: "0304-8821431", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Aziz 4 no chungi", phone: "0312-4853040", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Noor qari shafi madrssa", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Tahir Bhanja Kundal", phone: "0311-7358948", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Sohail Tufail kundal", phone: "0313-7772125", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Waheed Fakhri Kalyar chok", phone: "0300-3341886", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Ikram 4 no chungi", phone: "0308-0296183", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Mazhar Dhaba chok", phone: "0302-5412370", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Faizi Arain Hotel", phone: "0307-4726271", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Asmatullah Wapda ", phone: "0302-3957116", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Javeed ada", phone: "0333-6836041", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Umar hayat / Khalid usmani", phone: "0311-0704848", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Zakwan c2 colony ", phone: "0304-1955115", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Gull meet / Shani /foji Mumtaz c2 colony ", phone: "0318-4780488", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Fazal Tufail CNG", phone: "0318-7909055", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Muhammad Haneef / Arif Chashlam Colony", phone: "0334-7585488", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Irfan Watto chok", phone: "0301-4966387", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Gulzar Sadedqi Bazar", phone: "0302-2413146", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Kamran kami", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Lajpal Bhorvi main bazar", phone: "0303-7272442", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
];

// Predefined contacts to be added under "Chakok Contacts"
const newChakokContacts = [
    { name: "Hafiz Nazeer", phone: "0343-6893868", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Maqsood", phone: "0302-7979519", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Abid Tanveer", phone: "0306-5392520", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Ghoos Junaid Puli", phone: "0343-4189959", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Younas Khanqa", phone: "0345-5820378", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz 5 Chak", phone: "0347-7847199", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Amjad 5 Chak", phone: "0333-9829784", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Arif Faryad 5 Chak", phone: "0307-4857120", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz Mairaji", phone: "0344-6876157", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Sadiq 4 Chak", phone: "0300-4803745", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Mushtaq Goly Wala", phone: "0301-6302330", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Hameed Sultany Wala", phone: "0307-7013270", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Anwar Sultany Wala", phone: "0304-4101339", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Atta Rasool", phone: "0306-2539623", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" }
];

// Predefined contacts to be added under "Employee Contacts"
const newEmployeeContacts = [
    { name: "Asim Shah/Tasleem Shah", phone: "0300-7870705", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Ajmal", phone: "0318-6837134", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Ateeq", phone: "0340-7488060", category: "Employee Contacts", subcategory: "None" },
    { name: "Waqas Ahmed Dhoon", phone: "0306-9052240", category: "Employee Contacts", subcategory: "None" },
    { name: "Waqas Ahmed Jora", phone: "0301-6067646", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Fawad Azam", phone: "0304-8523826", category: "Employee Contacts", subcategory: "None" },
    { name: "Faraz Sadeeqi", phone: "0312-5829431", category: "Employee Contacts", subcategory: "None" },
    { name: "Syed Najaf Ali Shah", phone: "0342-9329803", category: "Employee Contacts", subcategory: "None" },
    { name: "Asim Khan", phone: "0305-2443790", category: "Employee Contacts", subcategory: "None" },
    { name: "Nemat Ullah", phone: "0332-5062164", category: "Employee Contacts", subcategory: "None" },
    { name: "Maqsood ul Hassan", phone: "0319-6538656", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Bilal", phone: "0316-7460238", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Irfan", phone: "0310-7878370", category: "Employee Contacts", subcategory: "None" },
    { name: "Muhammad Haris", phone: "0309-0295583", category: "Employee Contacts", subcategory: "None" },
    { name: "Ahtesham", phone: "0320-0956752", category: "Employee Contacts", subcategory: "None" }
];

// Predefined contacts to be added under "Drivers Contacts"
const newDriversContacts = [
    { name: "Driver Name 1", phone: "0300-6666661", category: "Drivers Contacts", subcategory: "None" },
    { name: "Driver Name 2", phone: "0300-6666662", category: "Drivers Contacts", subcategory: "None" }
];

// Now add the unique contacts for all categories
addUniqueContacts(newExecutiveContacts);
addUniqueContacts(newShopKeepersContacts);
addUniqueContacts(newSuppliersContacts);
addUniqueContacts(newBrokersContacts);
addUniqueContacts(newDeraShopKeepersContacts);
addUniqueContacts(newLocalContacts);
addUniqueContacts(newChakokContacts);
addUniqueContacts(newEmployeeContacts);
addUniqueContacts(newDriversContacts);  // Add Drivers Contacts

// Save the updated contact list to LocalStorage
localStorage.setItem('contactData', JSON.stringify(contactData));

// Optional: Alert to confirm contacts were added
alert("Unique contacts added for all categories.");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission from refreshing the page

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const subcategory = category === "Shop Keepers Contacts" ? document.getElementById("subcategory").value : "None";

    // Check if the contact already exists
    if (!isContactExists(phone)) {
        saveContact(name, phone, category, subcategory);
    } else {
        alert("This contact already exists.");
    }

    // Clear the form fields after submission
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("category").value = 'Executive Contacts';
    document.getElementById("subcategory").disabled = true;
});

// Show subcategories only for Shop Keepers Contacts
document.getElementById("category").addEventListener("change", function () {
    const subcategoryElement = document.getElementById("subcategory");
    if (this.value === "Shop Keepers Contacts") {
        subcategoryElement.disabled = false;  // Enable subcategory select
    } else {
        subcategoryElement.disabled = true;   // Disable subcategory select for other categories
    }
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

    const list = contactData.filter(contact => contact.category === categoryOrSubcategory || contact.subcategory === categoryOrSubcategory);

    if (!list.length) {
        contactList.innerHTML = `No contacts found for ${categoryOrSubcategory}`;
        return;
    }

    list.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.textContent = `${contact.name} - ${contact.phone}`;

        // Call button
        const callButton = document.createElement("a");
        callButton.href = `tel:${contact.phone}`;
        callButton.textContent = "Call";
        callButton.classList.add("call-btn");
        contactItem.appendChild(callButton);

        // WhatsApp button
        const whatsappButton = document.createElement("a");
        whatsappButton.href = `https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`;
        whatsappButton.textContent = "WhatsApp";
        whatsappButton.classList.add("whatsapp-btn");
        contactItem.appendChild(whatsappButton);

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editContact(index);
        contactItem.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteContact(index);
        contactItem.appendChild(deleteButton);

        contactList.appendChild(contactItem);
    });

    // Add a download button
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download Contacts";
    downloadButton.onclick = () => downloadContacts(categoryOrSubcategory, list);
    contactList.appendChild(downloadButton);
}

// Other functions (searchCategoryContacts, editContact, deleteContact, downloadContacts) remain the same...
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
        contactList.innerHTML = "No contacts found.";
        return;
    }

    filteredContacts.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.textContent = `${contact.name} - ${contact.phone}`;

        // Call button
        const callButton = document.createElement("a");
        callButton.href = `tel:${contact.phone}`;
        callButton.textContent = "Call";
        callButton.classList.add("call-btn");
        contactItem.appendChild(callButton);

        // WhatsApp button
        const whatsappButton = document.createElement("a");
        whatsappButton.href = `https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`;
        whatsappButton.textContent = "WhatsApp";
        whatsappButton.classList.add("whatsapp-btn");
        contactItem.appendChild(whatsappButton);

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editContact(index);
        contactItem.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteContact(index);
        contactItem.appendChild(deleteButton);

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
    contactData.splice(index, 1);
    localStorage.setItem('contactData', JSON.stringify(contactData));
    alert("Contact deleted.");
    viewContacts(currentCategory);
}

// Function to download contacts as a CSV
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
