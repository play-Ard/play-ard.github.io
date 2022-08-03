import React from 'react'
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from "../Components/PostList"
import PostCreate from "../Components/PostCreate"
import PostEdit from "../Components/PostEdit.js"

const Panel = () => {

return(

    <div>

        <Admin basename="/panel" dataProvider={restProvider('')}>

            <Resource key="posts" name="posts"   list={PostList} create={PostCreate} edit={PostEdit}>

            </Resource>

        </Admin>
   
    </div>

)

}


export default Panel