import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const PostList = (props) => {
  return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'></TextField>
                <TextField source='title'></TextField>
                <DateField source='publishedAt'></DateField>
                <EditButton basepath='/posts'></EditButton>
                <DeleteButton basepath='/posts'></DeleteButton>
            </Datagrid>
        </List>
  )
}

export default PostList