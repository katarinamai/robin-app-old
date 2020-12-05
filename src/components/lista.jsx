import { ListItem, Icon } from 'react-native-elements'

const List = (props) => {
const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

return (
    <View>
    {
        list.map((item, i) => (
        <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
        ))
    }
    </View>
    )
}

export default List;