const { Menu } = require("electron");

menuTemplates = [
  {
    id: 1,
    template: [
      {
        label:'New File',
        accelerator:"Ctrl + N"
        
      },
      {
        label:'New Window',
        accelerator:"Ctrl + Shift + N"
      },
      {
        type:'separator',
        
      },
      {
        label:'Open File',
        accelerator:"Ctrl + O"
      },
      {
        label:'Open Folder',
        accelerator:"Ctrl + Shift + O"
      },
      {
        label:'Open WorkSpace',
        
      },
      {
        label:'Open Recent',
        submenu:[

        ]
      },
      {
        type:'separator',
        
      },
      {
        label:'Save WorkSpace As',
        
      },
      {
        type:'separator',
        
      },
      {
        label:'Save',
        accelerator:"Ctrl + S"
      },
      {
        label:'Save As',
        accelerator:"Ctrl + Shift + S"
      },
      {
        label:'Save All',
        
      },
      {
        type:'separator',
        
      },
      {
        label:'Autosave',
        type:"checkbox",
        click:(menuItem, win, e)=>{
          menuItem.checked = !menuItem.checked
        },
        checked:true
      },
      {
        label:'Preferences',
        submenu:[]
      },
      {
        type:'separator',
        
      },
      {
        role:'quit'
        
      },
    ],
  },
  {
    id: 2,
    template: [
      {
        role: "editMenu",
      },
    ],
  },
  {
    id: 3,
    template: [
      {
        role: "viewMenu",
      },
    ],
  },
  {
    id: 4,
    template: [
      {
        role: "windowMenu",
      },
    ],
  },
  {
    id: 5,
    template: [
      {
        role: "help",
      },
    ],
  },
];

const createMenu = (popupMenuOptions, eventId) => {
  const template = menuTemplates.find(({ id }) => eventId === id);
  if (template) {
    const menu = Menu.buildFromTemplate(template.template);
    Menu.setApplicationMenu(menu);
    menu.popup(popupMenuOptions);
  }
};

module.exports = {
  createMenu,
};
