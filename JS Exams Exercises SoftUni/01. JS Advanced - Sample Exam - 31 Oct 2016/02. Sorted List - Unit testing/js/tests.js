let expect = chai.expect;

describe('Sorted List Unit Tests', function() {
    let myList;
    beforeEach(function() {
        myList = new SortedList();
    });

    describe('Test initial state', function() {
        it('add exists', () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('remove exists', () => {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('get exists', () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('size exists', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
        
    });

    describe('Test add()', () => {
        it('with one element', () => {
            myList.add(5);
            expect(myList.list.toString()).to.equal('5', 'List did not add correctly');
        });
        it('with many elements', () => {
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(myList.list.join(", ")).to.equal('3, 4, 5', 'List did not add correctly');
        });
    });

    describe('Test remove()', () => {
        it('with empty list', () => {
            expect(() => myList.remove()).throw(Error, 'Collection is empty');
        });
        it('with negative index', () => {
            myList.add(3);
            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('with index equal to list length', () => {
            myList.add(3);
            expect(() => myList.remove(1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('with index bigger than list length', () => {
            myList.add(3);
            expect(() => myList.remove(2)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('with correct index (should remove)', () => {
            myList.add(5);
            myList.add(4);
            myList.add(3);
            myList.remove(1);
            expect(myList.list.join(', ')).to.equal('3, 5', 'Did not remove element correctly');
        });
    });

    describe('Test get()', () => {
        it('with empty list', () => {
            expect(() => myList.get()).throw(Error, 'Collection is empty');
        });
        it('with negative index', () => {
            myList.add(3);
            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('with index equal to list length', () => {
            myList.add(3);
            expect(() => myList.get(1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('with index bigger than list length', () => {
            myList.add(3);
            expect(() => myList.get(2)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('with correct index (should get the value)', () => {
            myList.add(5);
            myList.add(4);
            myList.add(3);           
            expect(myList.get(1)).to.equal(4, 'Incorrect get() element');
        });
    });
    
    describe('Test size', () => {
        it('with empty list', () => {
            expect(myList.size).to.equal(0, 'List was not empty');
        });
        it('with non-empty list', () => {
            myList.add(2);
            myList.add(6);
            expect(myList.size).to.equal(2, 'List size was not correct');
        });
    });


});

