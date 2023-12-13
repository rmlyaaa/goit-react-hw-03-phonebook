import { Button, Item, List } from './ContactList.styled';

export const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <Item key={contact.id}>
              {contact.name}: {contact.number}
              <Button
                type="button"
                value={contact.id}
                onClick={evt => onDelete(evt.target.value)}
              >
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
