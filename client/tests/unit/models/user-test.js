import { expect } from 'chai';
import { describeModel, it} from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'user',
  'User',
  {
     needs: [
       'model:post',
       'model:vendor',
       'model:photo',
       'model:album',
       'model:post',
       'model:status',
       'model:homepage',
       'model:template',
       'model:service',
       'model:event'
      ]
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });

    // --- Relationships ---
    it('it hasMany statuses relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('statuses');

        expect(relationship.key).to.equal('statuses');
        expect(relationship.kind).to.equal('hasMany');
    });

    it('it hasMany albums relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('albums');

        expect(relationship.key).to.equal('albums');
        expect(relationship.kind).to.equal('hasMany');
    });


    it('it hasMany photos relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('photos');

        expect(relationship.key).to.equal('photos');
        expect(relationship.kind).to.equal('hasMany');
    });

    it('it hasMany vendors relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('vendors');

        expect(relationship.key).to.equal('vendors');
        expect(relationship.kind).to.equal('hasMany');
    });

    it('it hasMany posts relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('posts');

        expect(relationship.key).to.equal('posts');
        expect(relationship.kind).to.equal('hasMany');
    });

    it('it hasMany homepages relationship', function() {
        var klass = this.subject({}).constructor;
        var relationship = Ember.get(klass, 'relationshipsByName').get('events');

        expect(relationship.key).to.equal('events');
        expect(relationship.kind).to.equal('hasMany');
    });


    // --- Computed Properties ---
    it('it computes fullName', function () {
      var model = this.subject({firstName: 'Dave', lastName:'Chappelle'});
      expect(model.get('fullName')).to.equal('Dave Chappelle');
    });
});

  //
  //
  // // --- Relationships ---
  // test('it has status relationship', function(assert) {
  //   var klass = this.subject({}).constructor;
  //   var relationship = Ember.get(klass, 'relationshipsByName').get('statuses');
  //
  //   assert.equal(relationship.key, 'statuses', 'exists');
  //   assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
  // });
  //
  // test('it has album relationship', function(assert) {
  //   var klass = this.subject({}).constructor;
  //   var relationship = Ember.get(klass, 'relationshipsByName').get('albums');
  //
  //   assert.equal(relationship.key, 'albums', 'exists');
  //   assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
  // });
  //
  // test('it has photo relationship', function(assert) {
  //   var klass = this.subject({}).constructor;
  //   var relationship = Ember.get(klass, 'relationshipsByName').get('photos');
  //
  //   assert.equal(relationship.key, 'photos', 'exists');
  //   assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
  // });
  //
  // test('it has vendor relationship', function(assert) {
  //   var klass = this.subject({}).constructor;
  //   var relationship = Ember.get(klass, 'relationshipsByName').get('vendors');
  //
  //   assert.equal(relationship.key, 'vendors', 'exists');
  //   assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
  // });
  //
  // test('it has post relationship', function(assert) {
  //   var klass = this.subject({}).constructor;
  //   var relationship = Ember.get(klass, 'relationshipsByName').get('posts');
  //
  //   assert.equal(relationship.key, 'posts', 'exists');
  //   assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
  // });
  //
  // test('it has event relationship', function(assert) {
  //   var klass = this.subject({}).constructor;
  //   var relationship = Ember.get(klass, 'relationshipsByName').get('events');
  //
  //   assert.equal(relationship.key, 'events', 'exists');
  //   assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
  // });
  //
  // // --- Computed Properties ---
  // test('it computes fullName', function(assert) {
  //   var model = this.subject({firstName: 'Dave', lastName:'Chappelle'});
  //
  //   assert.equal(model.get('fullName'), 'Dave Chappelle', 'creates fullName');
