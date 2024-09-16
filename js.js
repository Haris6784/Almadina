// Retrieve saved contacts from LocalStorage
let contactData = JSON.parse(localStorage.getItem('contactData')) || [];
let currentCategory = null;  // Track current category

// Predefined contacts to be added under "Executive Contacts"
const newExecutiveContacts = [
    { name: "Executive Name 1", phone: "0300-0000001", category: "Executive Contacts", subcategory: "None" },
    { name: "Executive Name 2", phone: "0300-0000002", category: "Executive Contacts", subcategory: "None" }
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
    { name: "Broker Name 1", phone: "0300-3333331", category: "Brokers Numbers", subcategory: "None" },
    { name: "Broker Name 2", phone: "0300-3333332", category: "Brokers Numbers", subcategory: "None" }
];

// Predefined contacts to be added under "Dera Shop Keepers Contact"
const newDeraShopKeepersContacts = [
    { name: "Dera Shop Keeper 1", phone: "0300-4444441", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" },
    { name: "Dera Shop Keeper 2", phone: "0300-4444442", category: "Shop Keepers Contacts", subcategory: "Dera Shop Keepers Contact" }
];

// Predefined contacts to be added under "Local Contacts"
const newLocalContacts = [
    { name: "Local Contact 1", phone: "0300-5555551", category: "Shop Keepers Contacts", subcategory: "Local Contacts" },
    { name: "Local Contact 2", phone: "0300-5555552", category: "Shop Keepers Contacts", subcategory: "Local Contacts" }
];

// Predefined contacts to be added under "Chakok Contacts"
const newChakokContacts = [
    { name: "Hafiz Nazeer", phone: "0343-6893868", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Maqsood", phone: "0302-7979519", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Abid Tanveer", phone: "0306-5392520", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Ghoos Junaid Pali", phone: "0343-4189959", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Younas", phone: "0345-5820378", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz 5 Chak", phone: "0347-7847199", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Amjad 5 Chak", phone: "0333-9829784", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Arif Faryad 5 Chak", phone: "0307-4857120", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Riaz Maraji", phone: "0344-6876157", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Sadiq 4 Chak", phone: "0300-4803745", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Mushtaq Goly Wala", phone: "0301-6302330", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Hameed Sultany Wala", phone: "0307-7013270", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Anwar Sultany Wala", phone: "0304-4101339", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" },
    { name: "Atta Rasool", phone: "0306-2539623", category: "Shop Keepers Contacts", subcategory: "Chakok Contacts" }
];

// Predefined contacts to be added under "Employee Contacts"
const newEmployeeContacts = [
    { name: "Asim Shah", phone: "0300-7870705", category: "Employee Contacts", subcategory: "None" },
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
    { name: "Khuram Armani", phone: "0315-2082302", category: "Employee Contacts", subcategory: "None" }
];

// Add predefined Executive, Shop Keepers, Suppliers, Brokers, Dera Shop Keepers, Local, Chakok, and Employee Contacts to the contact data
newExecutiveContacts.forEach(contact => contactData.push(contact));
newShopKeepersContacts.forEach(contact => contactData.push(contact));
newSuppliersContacts.forEach(contact => contactData.push(contact));
newBrokersContacts.forEach(contact => contactData.push(contact));
newDeraShopKeepersContacts.forEach(contact => contactData.push(contact));
newLocalContacts.forEach(contact => contactData.push(contact));
newChakokContacts.forEach(contact => contactData.push(contact));
newEmployeeContacts.forEach(contact => contactData.push(contact));

// Save the updated contact list to LocalStorage
localStorage.setItem('contactData', JSON.stringify(contactData));

// Optional: Alert to confirm contacts were added
alert("Predefined contacts for all categories added.");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission from refreshing the page

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const subcategory = category === "Shop Keepers Contacts" ? document.getElementById("subcategory").value : "None";

    // Save the contact
    saveContact(name, phone, category, subcategory);

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
    // Add the new contact to the array
    contactData.push({ name, phone, category, subcategory });
    
    // Save the updated contact list to LocalStorage
    localStorage.setItem('contactData', JSON.stringify(contactData));

    // Display an alert confirming the contact is saved
    alert(`Contact saved: ${name}, ${phone}, ${category}, ${subcategory}`);
}

// Function to view contacts by category or subcategory
function viewContacts(categoryOrSubcategory) {
    currentCategory = categoryOrSubcategory;  // Set current category
    document.getElementById("search-section").style.display = "block";  // Show search bar
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";  // Clear the list

    // Filter contacts by category or subcategory
    const list = contactData.filter(contact => contact.category === categoryOrSubcategory || contact.subcategory === categoryOrSubcategory);

    if (!list.length) {
        contactList.innerHTML = `No contacts found for ${categoryOrSubcategory}`;
        return;
    }

    // Display contacts in the list with call, edit, and delete options
    list.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.textContent = `${contact.name} - ${contact.phone}`;

        // Call button
        const callButton = document.createElement("a");
        callButton.href = `tel:${contact.phone}`; // This link will open the phone dialer and initiate a call
        callButton.textContent = "Call";
        callButton.classList.add("call-btn"); // Add class for styling
        contactItem.appendChild(callButton);

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

// Function to search contacts within a category (case-insensitive)
function searchCategoryContacts() {
    const searchQuery = document.getElementById("category-search-input").value.toLowerCase(); // Convert search query to lowercase
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";  // Clear the list

    // Filter contacts within the current category based on search query
    const filteredContacts = contactData.filter(contact => 
        (contact.category === currentCategory || contact.subcategory === currentCategory) &&
        (contact.name.toLowerCase().includes(searchQuery) || contact.phone.includes(searchQuery))
    );

    if (!filteredContacts.length) {
        contactList.innerHTML = "No contacts found.";
        return;
    }

    // Display the filtered contacts
    filteredContacts.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.textContent = `${contact.name} - ${contact.phone}`;

        // Call button
        const callButton = document.createElement("a");
        callButton.href = `tel:${contact.phone}`;
        callButton.textContent = "Call";
        callButton.classList.add("call-btn");
        contactItem.appendChild(callButton);

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
    viewContacts(currentCategory); // Refresh the list
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
    document.body.removeChild(link);  // Clean up
}
