import React from 'react';
import {shallow} from 'enzyme'
import ${NAME} from "../../public/scripts/${directory}/${NAME}"
import toJson from 'enzyme-to-json';

describe("${NAME}", () => {

    it("renders ${NAME} Component",() => {
        const  wrapper = shallow(<${NAME}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});