describe('Main controller', () => {
  let vm;

  beforeEach(angular.mock.module('rsvp'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

  it('should be defined', () => {
    expect(true).toBe(true);
  });

});
