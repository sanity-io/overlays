import { enableVisualEditing } from './enableVisualEditing'

/**
 * @public
 */
export type DisableOverlays = () => void

/**
 * Enable Sanity Overlays.
 *
 * Overlays are meant for non-production builds ,and should be disabled in production.
 *
 * @see enableVisualEditing
 * @public
 */
export function enableOverlays(): DisableOverlays {
  return enableVisualEditing()
}
