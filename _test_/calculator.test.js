import _ from 'lodash'
describe('calculator', function(){
    it('should return 3 when 1 plus 2', function(){
        expect(1+2).toEquals(3);
    });
    it('should return 6 when sum of 1,2,3', function(){
        expect(_.sum([1,2,3])).toEquals(6);
    });

});