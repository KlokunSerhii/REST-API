const { Command } = require("commander");
const program = new Command();

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allList = await contacts.listContacts();
      console.log(allList);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const add = await contacts.addContact({ name, email, phone });
      console.log(add);

      break;

    case "remove":
      const delet = await contacts.removeContact(id);
      console.log(delet);

      return;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
