/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Path-Configurator Example App",
            "formList": [
                {
                    "id": "PersonForm",
                    "title": "Person",
                    "url": "/person",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "attachments",
                            "name": "Files",
                            "type": "fileUpload",
                            "url": "/upload",
                            "multiple": true,
                            "acceptedFileTypes": [".pdf", ".doc", ".docx", ".txt", ".jpg", ".jpeg", ".png", ".zip", ".exe"],
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "CompanyForm",
                    "title": "Company",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "CompanyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "city",
                            "type": "text",
                            "name": "City",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "companyRating",
                            "type": "RadioGroupField",
                            "name": "Rating",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "A-Rating",
                                key: 0
                            }, {
                                type: "radio",
                                name: "B-Rating",
                                key: 1
                            }, {
                                type: "radio",
                                name: "C-Rating",
                                key: 2
                            }, {
                                type: "radio",
                                name: "D-Rating",
                                key: 3
                            }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ProjectForm",
                    "title": "Project",
                    "url": "/project",
                    "urlDefaults": true,
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "ProjectName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStart",
                            "type": "date",
                            "name": "StartDate",
                            "width": 1
                        },
                        {
                            "id": "evtEnd",
                            "type": "date",
                            "name": "EndDate",
                            "width": 1
                        },
                        {
                            "id": "projectPriority",
                            "type": "RadioGroupField",
                            "name": "Priority",
                            "alignment": "vertical",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Low",
                                key: 0
                            }, {
                                type: "radio",
                                name: "Medium",
                                key: 1
                            }, {
                                type: "radio",
                                name: "High",
                                key: 2
                            }
                            ]
                        },
                        {
                            "id": "projectType",
                            "type": "CheckboxGroupField",
                            "name": "Type",
                            "width": 2,
                            "data": [{
                                name: "Product",
                                key: "Product"
                            }, {
                                name: "Service",
                                key: "Service"
                            }
                            ]
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Contacts",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "contactspage",
                        },
                        {
                            "type": "button",
                            "name": "Companies",
                            "icon": "fa-industry",
                            "color": "lime",
                            "page": "companiespage",
                        },
                        {
                            "type": "button",
                            "name": "Projects",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "projectspage",
                        }
                    ]
                },
                {
                    "id": "contactspage",
                    "name": "Contacts",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewPerson",
                            "width": 2,
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/person",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                    ]
                },
                {
                    "id": "companiespage",
                    "name": "Companies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewCompany",
                            "width": 2,
                            "icon": "fa-industry",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "CompanyList",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "width": 3,
                            "searchWidth": 2,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                    ]
                },
                {
                    "id": "projectspage",
                    "name": "Projects",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewProject",
                            "width": 2,
                            "icon": "fa-cubes",
                            "color": "green",
                            "form": {
                                "form": "ProjectForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ProjectList",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "search": true,
                            "url": "/project",
                            "form": {
                                "form": "ProjectForm"
                            }
                        },
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
