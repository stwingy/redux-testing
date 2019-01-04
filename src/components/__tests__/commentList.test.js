import React from 'react'
import {mount} from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped
beforeEach(()=>{
const initialState={
    comments:["comment1","comment2","comment3"]
}

    wrapped =mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates 1 <li> per comment',()=>{
expect(wrapped.find('li').length).toEqual(3)
    
})

it('shows the text for each comment',()=>{
    expect(wrapped.render().text()).toContain("comment1")
    expect(wrapped.render().text()).toContain("comment2")
    expect(wrapped.render().text()).toContain("comment3")
})