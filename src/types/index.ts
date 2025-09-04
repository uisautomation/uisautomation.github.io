/**
 * Interface representing a user profile
 */
export interface IProfile {
  /** User's display name */
  displayName: string
  /** Optional avatar image URL */
  avatarUrl?: string
  /** User's username/identifier */
  username: string
}

/**
 * Interface for table column configuration
 */
export interface IColumn {
  /** Unique identifier for the column */
  key: string
  /** Primary display text for the column */
  primaryText: string
  /** Optional secondary description text */
  secondaryText?: string
}