import { Column } from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:"/>
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log}/>
    </AppContainer>
  )
}
