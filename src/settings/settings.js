import {
  openSettingsDialog,
  saveSettings,
  TEXT_BOX
} from 'sketch-plugin-helper'

const settingsConfig = {
  title: 'Export Prototype',
  inputs: [
    {
      type: TEXT_BOX,
      key: 'outputDirectory',
      label: 'Output directory'
    }
  ]
}

export default function settings () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings(settings, { successMessage: 'Settings saved' })
  }
}
