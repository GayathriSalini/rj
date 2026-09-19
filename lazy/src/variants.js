const clamp = (n) => Math.min(1, Math.max(0, n))
const ease = (t) => t * t * (3 - 2 * t)

// Each variant maps scroll progress p (0..1) to the scene's state:
//   l     lid-open progress, 0..1 (drives screen wake, scroll hint)
//   z     zoom-into-screen progress, 0..1 (drives scale, bezel fade)
//   ang   hinge angle of the lid: -90deg shut, 0deg upright
//   tilt  camera pitch (rotateX on the whole scene)
//   roty  camera yaw
//   ty    vertical offset in scene px — must reach 0 by z=1 or the screen drifts
//         off-centre while zooming (the translate is scaled with the scene)
//   sm    scale multiplier applied before the zoom, for dolly-style pushes
export const variants = {
  classic: {
    label: 'Classic',
    note: 'camera looks down, levels as the lid comes up',
    motion(p) {
      const l = ease(clamp(p / 0.45))
      const z = ease(clamp((p - 0.45) / 0.5))
      return { l, z, ang: -90 + l * 98 - z * 8, tilt: -(1 - l) * 40, ty: -(1 - l) * 620 }
    },
  },

  steady: {
    label: 'Steady',
    note: 'nothing moves but the hinge — fixed camera, no dolly',
    // Camera is pinned at -26deg, so the lid opens 116deg to end face-on to it.
    // Nothing else animates; the zoom is a pure scale.
    motion(p) {
      const l = ease(clamp(p / 0.5))
      const z = ease(clamp((p - 0.5) / 0.45))
      return { l, z, ang: -90 + l * 116, tilt: -26, ty: z * 40.5, sm: 1 + z * 0.068 }
    },
  },

  dolly: {
    label: 'Dolly',
    note: 'pushes in from across the room before it opens',
    motion(p) {
      const push = ease(clamp(p / 0.35))
      const l = ease(clamp((p - 0.25) / 0.4))
      const z = ease(clamp((p - 0.65) / 0.33))
      return {
        l, z,
        ang: -90 + l * 98 - z * 8,
        tilt: -(1 - l) * 30,
        ty: -(1 - l) * 500,
        sm: 0.35 + 0.65 * push,
      }
    },
  },

  orbit: {
    label: 'Orbit',
    note: 'swings round from three-quarter view',
    motion(p) {
      const l = ease(clamp(p / 0.55))
      const z = ease(clamp((p - 0.55) / 0.42))
      return {
        l, z,
        ang: -90 + l * 98 - z * 8,
        tilt: -(1 - l) * 34,
        roty: -(1 - l) * 32,
        ty: -(1 - l) * 520,
      }
    },
  },

  rise: {
    label: 'Rise',
    note: 'lifts into frame shut, then opens',
    motion(p) {
      const up = ease(clamp(p / 0.3))
      const l = ease(clamp((p - 0.3) / 0.4))
      const z = ease(clamp((p - 0.7) / 0.3))
      return {
        l, z,
        ang: -90 + l * 98 - z * 8,
        tilt: -(1 - l) * 36,
        ty: (1 - up) * 900 - (1 - l) * 600,
      }
    },
  },

  overhead: {
    label: 'Overhead',
    note: 'straight down on the lid, falls to eye level',
    motion(p) {
      const l = ease(clamp(p / 0.6))
      const z = ease(clamp((p - 0.6) / 0.38))
      return {
        l, z,
        ang: -90 + l * 98 - z * 8,
        tilt: -(1 - l) * 76,
        ty: -(1 - l) * 340,
      }
    },
  },
}

export const routes = Object.keys(variants)

export const pick = (path) => {
  const key = path.replace(/\/+$/, '').split('/').pop()
  return variants[key] ? key : 'classic'
}
