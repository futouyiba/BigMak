// Fill out your copyright notice in the Description page of Project Settings.


#include "BigMakGameInstance.h"

void UBigMakGameInstance::Init()
{
}

void UBigMakGameInstance::OnStart()
{
	GameScript = MakeShared<puerts::FJsEnv>();
	//GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
	//GameScript->WaitDebugger();
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
	GameScript->Start("QuickStart", Arguments);
}

void UBigMakGameInstance::Shutdown()
{
	GameScript.Reset();
}