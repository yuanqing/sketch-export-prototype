import {
  openSettingsDialog,
  saveSettings,
  showSuccessMessage,
  CHECK_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Settings for Export Prototype',
  formFields: [
    {
      type: CHECK_BOX,
      key: 'showHotspots',
      label: 'Show hotspots'
    },
    {
      type: CHECK_BOX,
      key: 'showNavigation',
      label: 'Show navigation'
    },
    {
      type: TEXT_BOX,
      key: 'outputDirectoryPath',
      label: 'Output directory'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings)
    showSuccessMessage('Saved settings')
  }
}
