import React from 'react'
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'
//full rendering must clean up

let wrapped
beforeEach(()=>{
    wrapped = mount(<Root><CommentBox /></Root>)
})
afterEach(()=>{
    wrapped.unmount()
})
it('has a textarea and 2 buttons',()=>{
 

expect(wrapped.find('textarea').length).toEqual(1)
expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area',()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target:{value:'new comment'}
        })
        wrapped.update()
    })
    it('has a textarea that users can type in',()=>{
     
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    
    })
    
    it('when submitted, the textarea is emptied',()=>{
    
        //expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
        wrapped.find('form').simulate('submit')
    wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    
    })

})
