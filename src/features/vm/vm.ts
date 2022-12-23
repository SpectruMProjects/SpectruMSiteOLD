import { Context } from 'react'
import { BehaviorSubject } from 'rxjs'

export abstract class VM<T, This extends VM<T, This>> extends BehaviorSubject<T> {
  private _old: T

  constructor(init: T) {
    super(init)
    this._old = init
    this.subscribe((next) => {
      this.onNext(this._old, next)
      this._old = next
    })
  }

  get state(): T {
    return this.value
  }

  emit(value: T) {
    this.next(value)
  }

  onNext(old: T, next: T) {}

  onInit() {}
  onDestroy() {
    this.complete()
  }

  abstract readonly context: Context<This>
}
