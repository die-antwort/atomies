AtomiesView = require './atomies-view'
{CompositeDisposable} = require 'atom'

module.exports = Atomies =
  atomiesView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @atomiesView = new AtomiesView(state.atomiesViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @atomiesView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'atomies:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @atomiesView.destroy()

  serialize: ->
    atomiesViewState: @atomiesView.serialize()

  toggle: ->
    console.log 'Atomies was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
