describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show the onboarding screen', async () => {
    await expect(element(by.text('Pick at least 3 movies:'))).toBeVisible()
    await expect(element(by.text('0 Picked'))).toBeVisible()
  })

  it('should show the onboarding movies list', async () => {
    await element(by.label('Pulp Fiction checkbox')).tap()
    await element(by.label('Die Hard checkbox')).tap()
    await element(
      by.label("Harry Potter and the Philosopher's Stone checkbox")
    ).tap()
    await expect(element(by.text('3 Picked'))).toBeVisible()
    await element(by.label('Next')).tap()
  })
})
