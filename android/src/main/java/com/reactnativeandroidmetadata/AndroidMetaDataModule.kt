package com.reactnativeandroidmetadata

import android.content.pm.ApplicationInfo
import android.content.pm.PackageManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class AndroidMetaDataModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AndroidMetaData"
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    fun getKey(name:String, promise: Promise) {
      val ai = reactContext.packageManager.getApplicationInfo(reactContext.packageName, PackageManager.GET_META_DATA)
      val bundle = ai.metaData
      val value = bundle.getString(name)
      promise.resolve(value)
    }


}
