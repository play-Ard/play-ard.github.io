import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'



const PostCreate = (props) => {
  return (
    <div>


        <Create title="Create a post" {...props}>

            <SimpleForm>

                <TextInput source="title"></TextInput>
                <TextInput multiline source="body"></TextInput>
                <DateInput label="Published" source='publishedAt'></DateInput>

            </SimpleForm>

        </Create>


    </div>
  )
}

export default PostCreate