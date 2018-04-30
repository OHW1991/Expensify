import moment from 'moment';
import {setStartDate,setEndDate,sortByAmount,sortByDate,setTextFilter} from '../../actions/filters';

test('should generate set start date action target',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action target',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should setup sort by amount',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT' 
    });
});

test('should setup sort by date',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE' 
    });
});

test('should setup set text filter action object with provided values',()=>{
    const text='Bill';
    const action=setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should setup set text filter action object with default values',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});